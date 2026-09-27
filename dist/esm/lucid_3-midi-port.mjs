export const name="lucid_3-midi-port";
export const id="dl_8f40e32aa2b9418e8717";
export const url=new URL("../icons/lucid_3-midi-port.svg?v=2568b219b8277dca7202ef1af9e7ab547ac995fa2bcac2036acf8a329f9e4060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
