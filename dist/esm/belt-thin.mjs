export const name="belt-thin";
export const id="dl_cfbd2c68aa354a3994a0";
export const url=new URL("../icons/belt-thin.svg?v=6f935b717a3ac3ca717ea6cb1360dd58ddb0d9f693b458db31904f45bde42a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
