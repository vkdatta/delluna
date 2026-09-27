export const name="arrow-line-up-left-thin";
export const id="dl_dd88eccb3d2e4819bf69";
export const url=new URL("../icons/arrow-line-up-left-thin.svg?v=c97ff40e985915210027a665ffbf9638bb3e976d5191d1e00488502439413a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
