export const name="rectangle-bold";
export const id="dl_7618ea2c9cef4dcb971d";
export const url=new URL("../icons/rectangle-bold.svg?v=145ee233dcc88fd083bc3fb19d4d2c3435143b4afe72ef900f41dc2877f7dcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
