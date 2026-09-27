export const name="top_panel_open-fill";
export const id="dl_aa17fe038b7747e58d78";
export const url=new URL("../icons/top_panel_open-fill.svg?v=061bf1d088bdafd69ef0812ddc9e11d705ddb44a07a8874c34807f74e6abfc05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
