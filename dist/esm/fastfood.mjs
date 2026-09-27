export const name="fastfood";
export const id="dl_684a1690bcda63f90974";
export const url=new URL("../icons/fastfood.svg?v=0c47fbf20a9490fc882971660600accee0e569a02c162ebc46c09014086eb73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
