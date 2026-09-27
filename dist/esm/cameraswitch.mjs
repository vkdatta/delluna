export const name="cameraswitch";
export const id="dl_02daf4069a210eecf42c";
export const url=new URL("../icons/cameraswitch.svg?v=dad728a4385685c56e6cc11714d3dacdb9d481afb3cd015180d91592bb3f9d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
