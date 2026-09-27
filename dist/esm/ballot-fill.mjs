export const name="ballot-fill";
export const id="dl_80d87c70ae4dff78fe83";
export const url=new URL("../icons/ballot-fill.svg?v=5c023d3920d11f5efc3ac6e18cd4fb6de8e3c4801772116bd723c37ac914149b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
