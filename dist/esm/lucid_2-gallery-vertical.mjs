export const name="lucid_2-gallery-vertical";
export const id="dl_43d93edccbd44bbe9915";
export const url=new URL("../icons/lucid_2-gallery-vertical.svg?v=6f13133ac887d6bd5c2e4fad101dcb8e3fc3328b99fe45e053e177eee9eae518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
