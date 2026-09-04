export const name="linktree-logo";
export const id="dl_06ff3d16238440bfabdd";
export const url=new URL("../../icons/L/linktree-logo.svg?v=fc48ff073d83c1c249919fa694a73406d1703aeef759cfd99447d64e69e98b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
