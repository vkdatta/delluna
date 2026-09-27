export const name="bird-bold";
export const id="dl_112d7974afe445a69fe0";
export const url=new URL("../icons/bird-bold.svg?v=41af330fa2666a5b500b33554f2c8afb5201742771feb6ee1ea64a57e987f0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
