export const name="type_specimen";
export const id="dl_cff66ae92df548abb580";
export const url=new URL("../icons/type_specimen.svg?v=df74993a8f0fa4e42a14bcd24a637e902e0f36f8e448866a53590ab37a90ed7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
