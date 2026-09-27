export const name="hard_drive";
export const id="dl_3c005c23a590172aeba0";
export const url=new URL("../icons/hard_drive.svg?v=a03ad1f470e6e47e1d1ec2991535aaa2c414fe0638b0deaad7cf00dede02ae80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
