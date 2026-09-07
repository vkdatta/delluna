export const name="hourglass-simple-medium-duotone";
export const id="dl_53dad18571654905b9d0";
export const url=new URL("../icons/hourglass-simple-medium-duotone.svg?v=ac705b6ca997841c984b85cae9a22028c3a869135871dc4526c6346e4c7867a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
