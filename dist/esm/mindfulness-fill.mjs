export const name="mindfulness-fill";
export const id="dl_ab0792a1f24ec1d89f51";
export const url=new URL("../icons/mindfulness-fill.svg?v=6f27a81c76b7904676063edc30ae24c241175c467bcd552fddc67e39e90ab812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
