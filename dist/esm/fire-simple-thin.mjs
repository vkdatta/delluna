export const name="fire-simple-thin";
export const id="dl_fc61fef8993c4c0facc7";
export const url=new URL("../icons/fire-simple-thin.svg?v=51e7e5da9b35d0c20ec22dad56823aea0edb4808685d3abdaf5f35971fc5971f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
