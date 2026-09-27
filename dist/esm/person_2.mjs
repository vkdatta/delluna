export const name="person_2";
export const id="dl_12e6009ef7a6cdaa151d";
export const url=new URL("../icons/person_2.svg?v=cf0a6ea6869ada6e98b5609bc8761e14c0b982d6f705fc8733b55326cc6dba12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
