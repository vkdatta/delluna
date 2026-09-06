export const name="flask-bold";
export const id="dl_f4d7c256f21941ea981d";
export const url=new URL("../icons/flask-bold.svg?v=bd2e50bcab8c9b897bf7603254a96a327eee9594471dc530866cd95d1910dcbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
