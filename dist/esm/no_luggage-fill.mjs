export const name="no_luggage-fill";
export const id="dl_1647b4750903c71d18c5";
export const url=new URL("../icons/no_luggage-fill.svg?v=c03425c26faa2f9bed92736198459c3e93e261d35e1cee6f6dec9ce2b49f91b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
