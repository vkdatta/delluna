export const name="calendar-minus-duotone";
export const id="dl_55d596d3b8d046d1a21a";
export const url=new URL("../icons/calendar-minus-duotone.svg?v=fe6eb2fa1b6ecdf6df1bc358f72d50b6b7f6f96f4e5945ca56f9c52fe83a142d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
