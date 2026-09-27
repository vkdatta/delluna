export const name="collapse";
export const id="dl_30612ea20347c3aba4be";
export const url=new URL("../icons/collapse.svg?v=e000955cbc85e02793cb260023fb40b5c3b53e94f578c2086de287210fd59a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
