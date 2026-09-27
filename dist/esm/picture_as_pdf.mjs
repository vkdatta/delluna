export const name="picture_as_pdf";
export const id="dl_7b678e548ba13500c94b";
export const url=new URL("../icons/picture_as_pdf.svg?v=35c5f42dfff09adabc3815a1fb497a8113e44c59461d8a7547d21654e988363f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
