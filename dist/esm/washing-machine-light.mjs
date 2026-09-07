export const name="washing-machine-light";
export const id="dl_723cb04cce244b79838d";
export const url=new URL("../icons/W/washing-machine-light.svg?v=95ad4b9634a67edfce5995a239072bf623d41f5437708107cf85210d69fd0f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
