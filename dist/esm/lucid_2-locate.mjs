export const name="lucid_2-locate";
export const id="dl_2217e06c1c104f7fba55";
export const url=new URL("../icons/lucid_2-locate.svg?v=cb61606cdd7a6cf5f534e24bbbc668651649e3ceb8f74704dd5ffd4e892b76a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
