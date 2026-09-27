export const name="backspace";
export const id="dl_d71c9730fd21bfb0587d";
export const url=new URL("../icons/backspace.svg?v=0dfceb3599c1f8c484ccd672cfdae913e7ec76a05da9c41ea02eeae5a11ea6cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
