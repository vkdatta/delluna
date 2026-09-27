export const name="seal-question-thin";
export const id="dl_8896c26525af9b1573e8";
export const url=new URL("../icons/seal-question-thin.svg?v=4387631d554b27294833a923947715d98218646ea6f9ab89970dde89eb76d1b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
