export const name="picture_in_picture_alt";
export const id="dl_f8018ce08ca219ac554c";
export const url=new URL("../icons/picture_in_picture_alt.svg?v=e5b6a227254e42439fb5c57a4c6cde0323a61279a1acf236e39088ed7f885cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
