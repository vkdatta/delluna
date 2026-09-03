export const name="virus";
export const id="dl_c25f8c197e3e49f0afc8";
export const url=new URL("../../icons/lucid_4/virus.svg?v=ed31331c9068eb428840ab6ead2936b0be85819bf30a25fd77bc15b90563dd6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
