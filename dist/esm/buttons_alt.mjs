export const name="buttons_alt";
export const id="dl_0446790534b23889de00";
export const url=new URL("../icons/buttons_alt.svg?v=aa5eb4b5a1d691e5da78c799e6ce9d59c693eec08d03ccedaacb81b7a093b69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
