export const name="user-circle-plus-light";
export const id="dl_93ef8d4349ee4647bc04";
export const url=new URL("../icons/U/user-circle-plus-light.svg?v=19609d02e80ea19982c37afbfdbfb2b4ffe0d65aff5b1b1c182d902c23bc9333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
