export const name="speaker_group";
export const id="dl_95c8f07a05ac46698192";
export const url=new URL("../icons/S/speaker_group.svg?v=5dcc5d3bb82462f7208594c1ee3b6159c28e55eb9155496dfa113b273977839e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
