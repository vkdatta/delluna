export const name="solar-panel-thin";
export const id="dl_a2abcd9b96b9f075d72f";
export const url=new URL("../icons/solar-panel-thin.svg?v=57a86f495e98f5794fc56d530cbe589e19ba4ab523677d05000aeca6276800ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
