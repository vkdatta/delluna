export const name="guitar-bold";
export const id="dl_b30db119a1114f5384cc";
export const url=new URL("../icons/guitar-bold.svg?v=34c9ed8ad60c5161dd28473d292ac0e8eab637f0c679c49a72268b2f0d133ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
