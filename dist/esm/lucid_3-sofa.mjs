export const name="lucid_3-sofa";
export const id="dl_f769c9383d834587ae7f";
export const url=new URL("../icons/lucid_3-sofa.svg?v=80b2c5612cee2021b465f8e49457fc01cb1ddb0cd1e0f25d99c184044d4cdf2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
