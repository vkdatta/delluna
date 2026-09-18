export const name="psychology_alt";
export const id="dl_69e0c97e69e94290bc6e";
export const url=new URL("../icons/psychology_alt.svg?v=5036b04fb8a365b30afa6766a1ad97d90eb53cc2c2914b90f7757bde613beb7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
