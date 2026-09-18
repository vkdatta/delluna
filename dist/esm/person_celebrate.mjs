export const name="person_celebrate";
export const id="dl_71bcf7abe05b4b448e44";
export const url=new URL("../icons/person_celebrate.svg?v=12465893e90b686a0e4dd1528c443a1dd644f2dd7f677bc979ec4b02d8f08fa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
