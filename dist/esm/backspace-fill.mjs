export const name="backspace-fill";
export const id="dl_15ac82caa97543d095bc";
export const url=new URL("../icons/backspace-fill.svg?v=eed8825e887ff341e37eb50beee0dc16f3842c91553fc9ec485aa7470fa333e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
