export const name="css";
export const id="dl_52d4d96e43744c4c54ed";
export const url=new URL("../icons/css.svg?v=7444320b97225ece0caeec83530252195f103205a2572741ccdeca0ebc116e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
