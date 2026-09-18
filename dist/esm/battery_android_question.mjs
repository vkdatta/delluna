export const name="battery_android_question";
export const id="dl_c56a3025acbb4536a1ae";
export const url=new URL("../icons/battery_android_question.svg?v=580d8cc9122bdffc0a9de14b55a59c56577b9b23065c0010dc8b4e8382448520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
