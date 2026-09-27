export const name="text_compare";
export const id="dl_45d56bd78f9c8099e47d";
export const url=new URL("../icons/text_compare.svg?v=5069dfa23f028bb00f93bd51a546a1c37c4426a75f42fd59e4c7c4260a3efdc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
