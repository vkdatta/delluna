export const name="user-focus";
export const id="dl_62a28bf15eb0b554a8d3";
export const url=new URL("../icons/user-focus.svg?v=2b57c60924b682f952ba6cf255d72cfc7f0fe18b01dacd863f8c39b2817a9444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
