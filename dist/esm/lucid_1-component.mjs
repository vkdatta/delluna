export const name="lucid_1-component";
export const id="dl_05cd6b370bb24edc8ba3";
export const url=new URL("../icons/lucid_1-component.svg?v=2f2f42b1043c63813119599d872855719ddea534cec812f27cff37d763c005f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
