export const name="flag_2";
export const id="dl_88e097ff3cb624c8be28";
export const url=new URL("../icons/flag_2.svg?v=e57a961fff7754921896cc950d4fa1de9fe493e57e81d03a4489966fbe12b6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
