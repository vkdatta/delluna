export const name="widgets";
export const id="dl_f8fe4c3f533874f47f9b";
export const url=new URL("../icons/widgets.svg?v=e336156ba552353c35a77bb78fce21304504974187fe2f5a308d07a9bb72f104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
