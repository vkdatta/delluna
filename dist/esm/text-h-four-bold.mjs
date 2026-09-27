export const name="text-h-four-bold";
export const id="dl_5b85e956ebac0f6d3941";
export const url=new URL("../icons/text-h-four-bold.svg?v=e98d77de10ab5a1e9d4447fdce3bbcb356975ccbca5da1f48f69a9b47466c37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
