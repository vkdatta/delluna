export const name="selection-background-thin";
export const id="dl_0a6f360699b4017aad36";
export const url=new URL("../icons/selection-background-thin.svg?v=bb89b9acbffb285f85340cb9d14219ac052d97a7cc2d1955b965e5b4f0268281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
