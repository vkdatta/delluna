export const name="contextual_token_add-fill";
export const id="dl_8fae10c49700f348c3d7";
export const url=new URL("../icons/contextual_token_add-fill.svg?v=fd1ade83d843ac8ac4e6e78948b9c414878d8b49e36883fb88b1c9933bd88dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
