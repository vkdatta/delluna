export const name="lucid_3-snail";
export const id="dl_610da9e5ebd744f08340";
export const url=new URL("../icons/lucid_3-snail.svg?v=6f8d9973813ffc256c169ca427d70e47f06e5398b618282bfbc611db13f31fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
