export const name="no_stroller";
export const id="dl_7eba6a2ff1808cbad4f2";
export const url=new URL("../icons/no_stroller.svg?v=e21139205e74ec617b323f546f954a2dca12d258023292cc491649fd5bf8b07a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
