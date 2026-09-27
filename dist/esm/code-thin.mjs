export const name="code-thin";
export const id="dl_34b23232687b42079dc0";
export const url=new URL("../icons/code-thin.svg?v=3567ced3d776baa969398014351adc3149ab9a54f563d23028391998e29f089b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
