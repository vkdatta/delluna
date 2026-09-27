export const name="waves-arrow-up";
export const id="dl_f7b314b76ef0489b8e5c";
export const url=new URL("../icons/waves-arrow-up.svg?v=26c00f38092014123015b748c31ae12f02005bd90001ceb993c131666be94bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
