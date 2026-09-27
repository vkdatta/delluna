export const name="signal_cellular_add";
export const id="dl_26d12e418ffe5d4d1c2e";
export const url=new URL("../icons/signal_cellular_add.svg?v=b314d872d03c788134f315921ec2d88e986b906df19479ff0f8d1fd5d9419976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
