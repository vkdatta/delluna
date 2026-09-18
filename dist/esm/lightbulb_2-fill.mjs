export const name="lightbulb_2-fill";
export const id="dl_efc983b2554a4565acf5";
export const url=new URL("../icons/L/lightbulb_2-fill.svg?v=de593c8c13ff62a715ec6903c6f9ff15baf0b21cbc7b34f4d89ec20ba36da2e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
