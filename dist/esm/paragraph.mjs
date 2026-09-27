export const name="paragraph";
export const id="dl_a71a2d1a53a4417e8952";
export const url=new URL("../icons/paragraph.svg?v=269646c7cbb4a0c9a96425ed354ac6759f246ed2a282673a4799c86555f4e9dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
