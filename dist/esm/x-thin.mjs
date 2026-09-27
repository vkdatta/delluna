export const name="x-thin";
export const id="dl_b77a923f82be4953b220";
export const url=new URL("../icons/x-thin.svg?v=2234cc9acdd4d5d293f32606cbb8d6be04b5868ca4b39179a3aeaf255c9f2876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
