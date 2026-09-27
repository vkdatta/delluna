export const name="electric_moped";
export const id="dl_678e2e94636642aeeda6";
export const url=new URL("../icons/electric_moped.svg?v=54d48df3ffcb01747b90890f6d8028342ea276f0e21286c61b2930699103d46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
