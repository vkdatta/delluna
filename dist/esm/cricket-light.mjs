export const name="cricket-light";
export const id="dl_9c89764ae32d448dbbd1";
export const url=new URL("../icons/cricket-light.svg?v=9b1d8201efb28832ff1c470f232e216cb9189c2cab56cb15e8079329013e1ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
