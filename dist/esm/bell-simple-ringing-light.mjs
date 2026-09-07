export const name="bell-simple-ringing-light";
export const id="dl_58cf7ae18044444a85dc";
export const url=new URL("../icons/bell-simple-ringing-light.svg?v=97a58c9d5d2eda8733a5c42db6a5e44f08a8813721977d6f9036b4deece29043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
